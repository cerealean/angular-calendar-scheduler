import { SchedulerViewDay } from "./scheduler-view-day.model";

export type SchedulerHeaderClickedEvent = {
    day: SchedulerViewDay;
    browserEvent: MouseEvent;
};
