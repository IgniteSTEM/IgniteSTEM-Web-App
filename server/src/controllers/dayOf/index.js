/* Details:
 *  date: ISO 8601
 *
 */
const schedule = (req, res) => {
    res.status(200).send({
        "data": [
            {
                time: "9:00 am - 9:45 am",
                session: "Registration + Casual Breakfast",
                speaker: "",
                capacity: "",
                location: "",
                notes: ""
            },
            {
                time: "9:45 am - 10:00 am",
                session: "Opening Remarks",
                speaker: "IgniteSTEM Directors",
                capacity: "",
                location: "GWB 4A220A",
                notes: "Conference welcome and opening remarks from IgniteSTEM Direcotrs"
            },
            {
                time: "10:00 am - 10:45 am",
                session: "Keynote",
                speaker: "Pat Yongpradit, Chief Academic Officer at Code.org",
                capacity: "",
                location: "GWB 4A220A",
                notes: "Keynote by Pat Yongpradit, Chief Academic Officer at Code.org"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Don Buckley (Design Thinking)",
                capacity: 30,
                location: "Baker Field",
                notes: "Design Thinking workshop led by Don Buckley"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Godwyn Morris (Makerspace)",
                capacity: 50,
                location: "GWB 4A220A",
                notes: "Makerspace session led by Godwyn Morris"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "IgniteSTEM Design Thinking",
                capacity: 20,
                location: "Empire State",
                notes: "Design Thinking workshop led by IgniteSTEMers"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Workshops for Teachers in Tech",
                capacity: 10,
                location: "Philharmonic",
                notes: "Technology in Teaching led by Aankit Patel"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Council for Opportunity in Education",
                capacity: 10,
                location: "Battery Park",
                notes: "Developing STEM Learners: Thinking Outside of the Classroom"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "IgniteSTEM Team Hackathon",
                capacity: 20,
                location: "Apollo",
                notes: "Hack-a-thon workshop (working in small groups)"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Chris Harris + Jennifer Kressler Duda",
                capacity: 10,
                location: "Riverside Park",
                notes: "Coding and Robots in the Special Needs Classroom"
            },
            {
                time: "12:30 pm - 1:15 pm",
                session: "Lunch",
                speaker: "",
                capacity: "",
                location: "GWB 4A220A",
                notes: ""
            },
            {
                time: "1:30 pm - 2:15 pm",
                session: "EdTech Panel",
                speaker: "Labster",
                capacity: "",
                location: "GWB 4A220A",
                notes: "Using edTech in the classroom: Q/A with three different areas"
            },
            {
                time: "1:30 pm - 2:15 pm",
                session: "EdTech Panel",
                speaker: "Jack DeFuria (Bolt Learning)",
                capacity: "",
                location: "GWB 4A220A",
                notes: ""
            },
            {
                time: "1:30 pm - 2:15 pm",
                session: "EdTech Panel",
                speaker: "Chris Harris + Jennifer Kressler Duda",
                capacity: "",
                location: "GWB 4A220A",
                notes: ""
            },
            {
                time: "2:15 pm - 3:00 pm",
                session: "Keynote",
                speaker: "Jonathan Rochelle, Director of Product Management at Google Education",
                capacity: "",
                location: "GWB 4A220A",
                notes: "Keynote and Q/A by Jonathan Rochelle, Director of Product Management at Google Education"
            },
            {
                time: "3:15 pm - 4:00 pm",
                session: "Unconference Session",
                speaker: "",
                capacity: "",
                location: "(tbd- info will be given to attendees at a later date)",
                notes: "Attendee-driven small group unconference and curriculum design sessions"
            },
            {
                time: "4:15 pm - 4:30 pm",
                session: "Closing Remarks",
                speaker: "IgniteSTEM Directors",
                capacity: "",
                location: "GWB 4A220A",
                notes: "Closing Remarks from IgniteSTEM"
            },
            {
                time: "4:30 pm - 6:00 pm",
                session: "IgniteSTEM Reception",
                speaker: "All Conference",
                capacity: "",
                location: "GWB 4A220A",
                notes: "Hack-in-a-box distribution and reception featuring drinks and snacks"
            }
        ]
    });
};

export default schedule;
