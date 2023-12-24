const app = Vue.createApp({
    data() {
        return {
            attended: null,
            total: null,
            current: 0,
            goal: 75,
            message: '',
        };
    },
    methods: {
        updateAttended() {
            this.attended = this.attended;
            this.calculate();
        },

        updateTotal() {
            this.total = this.total;
            this.calculate();
        },

        goalChange(){
            this.goal = goal
            this.calculate()
        },

        calculate() {
            var attendedClasses = this.attended;
            var skippedClasses = this.total - this.attended;
            const goalPercentage = this.goal;
            const totalClasses = this.total;

            var currentPercentage = (attendedClasses / totalClasses) * 100;

            this.skipped = skippedClasses;

            var classesNeeded = 0;
            var classesCanSkip = 0;

            if (currentPercentage < goalPercentage) {
                var remainingPercentage = goalPercentage - currentPercentage;
                classesNeeded = Math.ceil((remainingPercentage * totalClasses) / (100 - goalPercentage));
                this.message = `You need to attend ${classesNeeded} more classes to reach your goal.`;
            } 
            else {
                var excessPercentage = currentPercentage - goalPercentage;
                classesCanSkip = Math.floor((excessPercentage * totalClasses) / goalPercentage);
                this.message = `You can skip up to ${classesCanSkip} classes and still meet your goal.`;
            }

            this.total = totalClasses;
            this.current = currentPercentage.toFixed(2);
        }
    }
});

app.mount('#app');