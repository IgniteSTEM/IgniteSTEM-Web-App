/* Details:
 *  date: ISO 8601
 *
 */
const schedule = (req, res) => {
    res.status(200).send({
        "data": [
            {
                "Session": "Registration + Casual Breakfast",
                "Speaker": "",
                "Capacity": "",
                "Location": "",
                "Notes": ""
            },
            {
                "Time": "9:30 - 9:45",
                "Session": "Opening Remarks",
                "Speaker": "IgniteSTEM Directors",
                "Capacity": "",
                "Location": "GWB 4A220A",
                "Notes": ""
            },
            {
                "Time": "10:00 - 10:45",
                "Session": "Keynote",
                "Speaker": "Pat Yongpradit, Chief Academic Officer at Code.org",
                "Capacity": "",
                "Location": "GWB 4A220A",
                "Notes": ""
            },
            {
                "Time": "11:00 - 12:30",
                "Session": "Lightning Talks and Workshops",
                "Speaker": "",
                "Capacity": "",
                "Location": "Apollo",
                "Notes": "max 25 people"
            },
            {
                "Time": "11:00 - 12:30",
                "Session": "Lightning Talks and Workshops",
                "Speaker": "Don Buckley (Design Thinking)",
                "Capacity": 20,
                "Location": "Apollo",
                "Notes": ""
            },
            {
                "Time": "11:00 - 12:30",
                "Session": "Lightning Talks and Workshops",
                "Speaker": "Godwyn Morris (Makerspace)",
                "Capacity": 30,
                "Location": "Apollo",
                "Notes": ""
            },
            {
                "Time": "11:00 - 12:30",
                "Session": "Lightning Talks and Workshops",
                "Speaker": "IgniteSTEM Design Thinking",
                "Capacity": 20,
                "Location": "Apollo",
                "Notes": "Rafe's DT workshop"
            },
            {
                "Time": "11:00 - 12:30",
                "Session": "Lightning Talks and Workshops",
                "Speaker": "Workshops for Teachers in Tech",
                "Capacity": 20,
                "Location": "Apollo",
                "Notes": "let by Aankit Patel"
            },
            {
                "Time": "11:00 - 12:30",
                "Session": "Lightning Talks and Workshops",
                "Speaker": "Paul Scully (Building One America)",
                "Capacity": 20,
                "Location": "Baker Field",
                "Notes": ""
            },
            {
                "Time": "11:00 - 12:30",
                "Session": "Lightning Talks and Workshops",
                "Speaker": "Council for Academic Opportunity",
                "Capacity": 20,
                "Location": "Apollo",
                "Notes": "D + I"
            },
            {
                "Time": "11:00 - 12:30",
                "Session": "Lightning Talks and Workshops",
                "Speaker": "Major League Hacking",
                "Capacity": 20,
                "Location": "Apollo",
                "Notes": ""
            },
            {
                "Time": "11:00 - 12:30",
                "Session": "Lightning Talks and Workshops",
                "Speaker": "Chris Harris",
                "Capacity": 20,
                "Location": "Apollo",
                "Notes": ""
            },
            {
                "Time": "12:30 - 1:15",
                "Session": "Lunch",
                "Speaker": "",
                "Capacity": "",
                "Location": "Space D",
                "Notes": ""
            },
            {
                "Time": "1:30 - 2:15",
                "Session": "EdTech Panel",
                "Speaker": "Labster",
                "Capacity": "",
                "Location": "GWB 4A220A",
                "Notes": ""
            },
            {
                "Time": "1:30 - 2:15",
                "Session": "EdTech Panel",
                "Speaker": "Jack DeFuria (Bolt Learning)",
                "Capacity": "",
                "Location": "GWB 4A220A",
                "Notes": ""
            },
            {
                "Time": "1:30 - 2:15",
                "Session": "EdTech Panel",
                "Speaker": "Piper",
                "Capacity": "",
                "Location": "GWB 4A220A",
                "Notes": ""
            },
            {
                "Time": "2:15 - 3:00",
                "Session": "Keynote",
                "Speaker": "Jonathan Rochelle, Director of Product Management at Google Education",
                "Capacity": "",
                "Location": "GWB 4A220A",
                "Notes": ""
            },
            {
                "Time": "3:15 - 4:00",
                "Session": "Unconference Session",
                "Speaker": "",
                "Capacity": "",
                "Location": "Apollo\r\nEmpire State\r\nBattery Park\r\nBethesda Fountain",
                "Notes": ""
            },
            {
                "Time": "4:15 - 4:30",
                "Session": "Closing Remarks",
                "Speaker": "IgniteSTEM Directors",
                "Capacity": "",
                "Location": "GWB 4A220A",
                "Notes": ""
            },
        ]
    });
};

export default schedule;
