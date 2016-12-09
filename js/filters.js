
mainApp.filter('YesNo', function () {
    return function (x) {
        //alert(x);
        if (x == 'S') return 'Standard';
        return x ? 'Yes' : 'No';
    };
});

mainApp.filter('Age', function () {
    return function (birthday) { // birthday is a date
        if (birthday == null)
            return '';
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

});

