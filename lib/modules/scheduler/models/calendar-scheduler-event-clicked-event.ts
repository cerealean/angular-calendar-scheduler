import { CalendarSchedulerEvent } from "./calendar-scheduler-event.model";

export type CalendarSchedulerEventClickedEvent = {
    event: CalendarSchedulerEvent;
    browserEvent: MouseEvent;
};
