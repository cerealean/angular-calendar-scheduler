import { SchedulerViewHourSegment } from "./scheduler-view-hour-segment.model";

export type SchedulerHourSegmentClickedEvent = {
    segment: SchedulerViewHourSegment;
    browserEvent: MouseEvent;
};
