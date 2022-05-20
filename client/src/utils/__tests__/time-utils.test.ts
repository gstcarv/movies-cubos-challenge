import { TimeUtils } from '../time-utils';

describe('TimeUtils', () => {
    it('formatFromMinutes should convert minutes to hours and minutes correctly', async () => {
        expect(TimeUtils.formatFromMinutes(59)).toStrictEqual({ hours: 0, minutes: 59 });
        expect(TimeUtils.formatFromMinutes(60)).toStrictEqual({ hours: 1, minutes: 0 });
        expect(TimeUtils.formatFromMinutes(230)).toStrictEqual({ hours: 3, minutes: 50 });
        expect(TimeUtils.formatFromMinutes(900)).toStrictEqual({ hours: 15, minutes: 0 });
    });
});
