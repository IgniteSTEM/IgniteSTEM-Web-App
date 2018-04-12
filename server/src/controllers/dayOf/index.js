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
                speaker: "-",
                location: "-"
            },
            {
                time: "9:45 am - 10:00 am",
                session: "Opening Remarks",
                speaker: "IgniteSTEM Directors",
                location: "GWB 4A220A"
            },
            {
                time: "10:00 am - 10:45 am",
                session: "Keynote",
                speaker: "Pat Yongpradit, Chief Academic Officer at Code.org",
                location: "GWB 4A220A"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Don Buckley (Design Thinking)",
                location: "Baker Field"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Godwyn Morris (Makerspace)",
                location: "GWB 4A220A"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "IgniteSTEM Design Thinking",
                location: "Empire State"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Workshops for Teachers in Tech (Aankit Patel)",
                location: "Philharmonic"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Council for Opportunity in Education (Nicole Norfles)",
                location: "Battery Park"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "IgniteSTEM Team Hackathon",
                location: "Apollo"
            },
            {
                time: "11:00 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Chris Harris + Jennifer Kressler-Duda",
                location: "Riverside Park"
            },
            {
                time: "11:50 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Don Buckley (Design Thinking)",
                location: "Baker Field"
            },
            {
                time: "11:50 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Godwyn Morris (Makerspace)",
                location: "GWB 4A220A"
            },
            {
                time: "11:50 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "IgniteSTEM Design Thinking",
                location: "Empire State"
            },
            {
                time: "11:50 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Ethics in Technology (Michael Schidlowsky)",
                location: "Philharmonic"
            },
            {
                time: "11:50 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Council for Opportunity in Education (Nicole Norfles)",
                location: "Battery Park"
            },
            {
                time: "11:50 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "IgniteSTEM Team Hackathon",
                location: "Apollo"
            },
            {
                time: "11:50 am - 12:30 pm",
                session: "Lightning Talks and Workshops",
                speaker: "Chris Harris + Jennifer Kressler-Duda",
                location: "Riverside Park"
            },
            {
                time: "12:30 pm - 1:15 pm",
                session: "Lunch",
                speaker: "All",
                location: "GWB 4A220A"
            },
            {
                time: "1:30 pm - 2:15 pm",
                session: "EdTech Panel",
                speaker: "Labster (Laura Wirpsza)",
                location: "GWB 4A220A"
            },
            {
                time: "1:30 pm - 2:15 pm",
                session: "EdTech Panel",
                speaker: "Jack DeFuria (Bolt Learning)",
                location: "GWB 4A220A"
            },
            {
                time: "1:30 pm - 2:15 pm",
                session: "EdTech Panel",
                speaker: "Jennifer Kressler-Duda",
                location: "GWB 4A220A"
            },
            {
                time: "1:30 pm - 2:15 pm",
                session: "EdTech Panel",
                speaker: "Chris Harris",
                location: "GWB 4A220A"
            },
            {
                time: "2:30 pm - 3:15 pm",
                session: "Keynote",
                speaker: "Jonathan Rochelle, Director of Product Management at Google Education",
                location: "GWB 4A220A"
            },
            {
                time: "3:15 pm - 4:00 pm",
                session: "Unconferencesession",
                speaker: "-",
                location: "GWB 4A220A"
            },
            {
                time: "4:15 pm - 4:30 pm",
                session: "Closing Ceremonies",
                speaker: "IgniteSTEM Team",
                location: "GWB 4A220A"
            },
            {
                time: "4:30 pm - 6:00 pm",
                session: "IgniteSTEM Reception",
                speaker: "-",
                location: "GWB 4A220A"
            }
        ]
    });
};

export default schedule;
