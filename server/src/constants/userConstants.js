// Meta data about user fields
const USER_FIELD_META = {
    username: {
        type: "string"
        description: "Username",
        allowNull: false,
    },
    email: {
        type: "string"
        description: "Email",
        allowNull: false,
    },
    password: {
        type: "string"
        description: "Password",
        allowNull: false,
    },
    first_name: {
        type: "string"
        description: "First Name",
        allowNull: false,
    },
    last_name: {
        type: "string"
        description: "Last Name",
        allowNull: false,
    },
    organization: {
        type: "string"
        description: "Organization",
        allowNull: true,
    },
    school: {
        type: "string"
        description: "School",
        allowNull: true,
    },
    bio: {
        type: "string"
        description: "Bio",
        allowNull: true,
    },
    twitter_username: {
        type: "string"
        description: "Twitter Handle",
        allowNull: true,
    },
    subjects: {
        type: "array"
        description: "Subjects",
        allowNull: true,
    },
    interests: {
        type: "array"
        description: "Interests",
        allowNull: true,
    }
}

export default USER_FIELD_META;
