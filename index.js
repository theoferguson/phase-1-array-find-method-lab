

function superbowlWin(record) {
        const foundRecord = record.find(wins => wins.result === "W");
        if (foundRecord) {
            return foundRecord.year;
        } 
}
