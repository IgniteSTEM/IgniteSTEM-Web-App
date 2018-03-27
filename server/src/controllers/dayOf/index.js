/* Details:
 *  date: ISO 8601
 *
 */
const schedule = (req, res) => {
    res.status(200).send({
        "data": [
            {
                "name": "Some Longggg Event Name IDK",
                "time": "2018-03-27T23:02:47+00:00",
                "location": "Some location",
                "category": "Workshop",
            },
            {
                "name": "Hackathon 101",
                "time": "2018-03-27T23:02:47+00:00",
                "location": "Room 5020 somewhere",
                "category": "Workshop",
            },
            {
                "name": "How to bring stem into the classroom",
                "time": "2018-03-27T23:02:47+00:00",
                "location": "A reasonably long location description",
                "category": "Workshop",
            },
            {
                "name": "TED Talk",
                "time": "2018-03-27T23:02:47+00:00",
                "location": "Short",
                "category": "Presentation",
            },
            {
                "name": "Eric Thoman Speaker Series",
                "time": "2018-03-27T23:02:47+00:00",
                "location": "kevin's house",
                "category": "Speaker",
            },
            {
                "name": "Event name",
                "time": "2018-03-27T23:02:47+00:00",
                "location": "kevin's house",
                "category": "Workshop",
            },
        ]
    });
};

export default schedule;
