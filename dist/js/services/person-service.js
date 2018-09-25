let PersonService = {
    getPersonPropertyNames() {
        return ["Id", "Name", "Age", "Location"];
    },

    getPersons() {
        return [
            { id: 1, name: "Garrett", age: 29, location: "Sunnyvale" },
            { id: 2, name: "Tyler", age: 26, location: "Walnut" },
            { id: 3, name: "Jinfull", age: 29, location: "Miami" }
        ];
    }
};

export default PersonService;