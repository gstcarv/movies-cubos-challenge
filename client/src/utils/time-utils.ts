export const TimeUtils = {
    /**
     * Convert minutes to hours and minutes
     * @param valueInMinutes time in minutes
     * @returns hours and minutes
     */
    formatFromMinutes(valueInMinutes: number) {
        const hours = valueInMinutes / 60;
        const floorHours = Math.floor(hours);
        const minutes = (hours - floorHours) * 60;

        return {
            hours: floorHours,
            minutes: Math.floor(minutes),
        };
    },
};
