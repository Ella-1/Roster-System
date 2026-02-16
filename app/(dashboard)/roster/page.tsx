"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import type { Shift, ViewMode } from "../../component/features/rosters/types";
import { departments, liveShifts, plannerShifts, rosterPeople } from "../../component/features/rosters/mock";
import ModeBar from "../../component/features/rosters/ui/ModeBar";
import PlannerToolbar from "../../component/features/rosters/ui/PlannerToolbar";
import RosterSidebar from "../../component/features/rosters/ui/RosterSidebar";
import PlannerGrid from "../../component/features/rosters/ui/PlannerGrid";
import ShiftListDialog from "../../component/features/rosters/ui/ShiftListDialog";

export default function RosterPage() {
    const [viewMode, setViewMode] = useState<ViewMode>("planner");
    const [day, setDay] = useState(() => new Date("2025-09-08T00:00:00"));
    const [loading, setLoading] = useState(false);

    const shifts: Shift[] = useMemo(
        () => (viewMode === "live" ? liveShifts : plannerShifts),
        [viewMode]
    );

    // details popup (like screenshot 2): click a shift => show list grouped by time
    const [openDetails, setOpenDetails] = useState(false);
    const [detailsDayLabel, setDetailsDayLabel] = useState("Wednesday 31");
    const [detailsShifts, setDetailsShifts] = useState<Shift[]>([]);

    const onPrevDay = async () => {
        setLoading(true);
        setDay((d) => new Date(d.getTime() - 24 * 60 * 60 * 1000));
        setTimeout(() => setLoading(false), 350);
    };

    const onNextDay = async () => {
        setLoading(true);
        setDay((d) => new Date(d.getTime() + 24 * 60 * 60 * 1000));
        setTimeout(() => setLoading(false), 350);
    };

    return (
        <Box bg="white" minH="100vh" px="6" py="5">
            
            <ModeBar
                value={viewMode}
                onChange={setViewMode}
                description={viewMode === "live" ? "Description of the live" : "Description of the planner view"}
            />

            <Flex mt="4" gap="6" align="flex-start">
               
                <RosterSidebar people={rosterPeople} />

                <Box flex="1" minW="0">
                    <PlannerToolbar
                        date={day}
                        onPrevDay={onPrevDay}
                        onNextDay={onNextDay}
                        onToday={() => setDay(new Date("2025-09-08T00:00:00"))}
                    />

                    <PlannerGrid
                        date={day}
                        loading={loading}
                        departments={departments}
                        shifts={shifts}
                        onShiftClick={(shift) => {
                            setDetailsDayLabel("Wednesday 31"); // set from date if you want
                            // show list of all shifts around that time (like screenshot)
                            const sameTime = shifts.filter((s) => s.start.slice(11, 16) === shift.start.slice(11, 16));
                            setDetailsShifts(sameTime.length ? sameTime : [shift]);
                            setOpenDetails(true);
                        }}
                    />
                </Box>
            </Flex>

            <ShiftListDialog
                open={openDetails}
                onClose={() => setOpenDetails(false)}
                dayLabel={detailsDayLabel}
                shifts={detailsShifts}
            />
        </Box>
    );
}
