import { useState, useEffect } from "react";
import useDataService from "./useDataService";

const filePathDrivers = "/data/drivers.json";

function calculateActivitySummary(traces) {
  let totalMinutes = 0;
  const activitySummary = {};

  traces.forEach(({ activity }) => {
    activity.forEach(({ type, duration }) => {
      totalMinutes += duration;
      activitySummary[type] = (activitySummary[type] || 0) + duration;
    });
  });

  return { totalMinutes, activitySummary };
}

function getWeekDays(traceDate) {
  const weekDays = { mon: 0, tue: 0, wed: 0, thu: 0, fri: 0, sat: 0, sun: 0 };
  const date = new Date(traceDate);
  const weekStart = new Date("2021-02-01");
  const weekEnd = new Date("2021-02-07");

  if (date >= weekStart && date <= weekEnd) {
    const dayIndex = date.getDay();
    const dayMap = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    weekDays[dayMap[dayIndex]] = 1;
  }

  return weekDays;
}

function processDriver(driver) {
  const { totalMinutes, activitySummary } = calculateActivitySummary(driver.traces);

  const weekDays = processTracesForWeekDays(driver.traces);

  return {
    ...driver,
    totalWeekMinutes: totalMinutes,
    activitySummary,
    ...weekDays,
  };
}

function processTracesForWeekDays(traces) {
  return traces.reduce((days, trace) => {
    const traceWeekDays = getWeekDays(trace.date);
    Object.keys(traceWeekDays).forEach((day) => {
      days[day] = days[day] || traceWeekDays[day];
    });
    return days;
  }, {});
}

function useProcessedDrivers() {
  const { data, loading, error } = useDataService(filePathDrivers);
  const [processedDrivers, setProcessedDrivers] = useState([]);

  useEffect(() => {
    if (!data?.data) return;

    const newDrivers = data.data.map((driver) => processDriver(driver));

    setProcessedDrivers(newDrivers);
  }, [data]);

  return { data: processedDrivers, loading, error };
}

export default useProcessedDrivers;