//angular.module('sbAdminApp', ['ui.bootstrap']);
angular.module('sbAdminApp').controller('jdController', function ($scope) {


    $scope.job =

      { position: null, status:null, qualification: [], educationalInstitution:[], industries: [], companies: [], duties: null, skillsMust: [], skillsOptional: [], incentives: null, workingDays: null, workingHoursStart: null, workingHoursEnd: null, jobNature: null, gender: null, directLineup: null, email: null, sourcing: null, interviewAddress: null, cv: null, functionalArea: null, jobLocation: null, minSalary: null, maxSalary: null, minExperience: null, maxExperience: null, vacancy: null, id: null }
    ;

    $scope.names = ["Accounting/Taxation/Adult", "Architectural Services/Interior Design", "Automotive", "Banking/Financial Services", "BPO", "Chemical/Fertilizer/Pesticides", "Construction/Real Estate", "Consulting", "Education & Training", "FMCG/Durables/FND", "Healthcare/Pharma/Biotech", "Hospitality/Travel", "Human Resources", "Industrial Products/Heavy Machinery", "Infrastructure", "Insurance", "Internet/Online/Startups", "IT", "KPO/Research/Analytics", "Legal", "Logistics/Courier/Cargo/Transportation", "Manufacturing", "Media/Journalism/PR", "Mining/Steel/Shipping", "NGO/Social Service", "Oil & Gas/Power/Energy", "Retail", "Services", "Telecom"];
    $scope.selectedIndustries = [];
    $scope.addIndustry = function () {
        $scope.selectedIndustries.push($scope.selectedIndustry);
    }



    $scope.removeIndustry = function (industry) {
        var index = $scope.selectedIndustries.indexOf(industry);
        if (index > -1) {
            $scope.selectedIndustries.splice(index, 1);
        }

    }


    //must have skills

    $scope.mustSkills = [];
    $scope.addSkill = function () {

        if ($scope.inputSkill && $scope.mustSkills.indexOf($scope.inputSkill) == -1) {
            $scope.mustSkills.push($scope.inputSkill);

            $scope.inputSkill = "";  //clearing text box
        }

    }


    $scope.removeSkill = function (skill) {
        var index = $scope.mustSkills.indexOf(skill);
        if (index > -1) {
            $scope.mustSkills.splice(index, 1);
        }

    }


    $scope.educationalIns = [];

    $scope.addInstitute = function () {

        if ($scope.inputInstitute && $scope.educationalIns.indexOf($scope.inputInstitute) == -1) {
            $scope.educationalIns.push($scope.inputInstitute);

            $scope.inputInstitute = "";  //clearing text box
        }

    }


    $scope.removeInstitute = function (institute) {
        var index = $scope.educationalIns.indexOf(institute);
        if (index > -1) {
            $scope.educationalIns.splice(index, 1);
        }

    }

    $scope.companies = [];

    $scope.addCompany = function () {

        if ($scope.inputCompany && $scope.companies.indexOf($scope.inputCompany) == -1) {
            $scope.companies.push($scope.inputCompany);

            $scope.inputCompany = "";  //clearing text box
        }

    }


    $scope.removeCompany = function (company) {
        var index = $scope.companies.indexOf(company);
        if (index > -1) {
            $scope.companies.splice(index, 1);
        }

    }



    $scope.qualification = [];

    $scope.addQualification = function () {

        if ($scope.inputQualification && $scope.qualification.indexOf($scope.inputQualification) == -1) {
            $scope.qualification.push($scope.inputQualification);

            $scope.inputQualification = "";  //clearing text box
        }

    }


    $scope.removeQualification = function (qualify) {
        var index = $scope.qualification.indexOf(qualify);
        if (index > -1) {
            $scope.qualification.splice(index, 1);
        }

    }

    //optional skills


    $scope.optSkills = [];
    $scope.addoptSkill = function () {

        if ($scope.inputoptSkill && $scope.optSkills.indexOf($scope.inputoptSkill) == -1) {
            $scope.optSkills.push($scope.inputoptSkill);

            $scope.inputoptSkill = "";  //clearing text box
        }

    }


    $scope.removeoptSkill = function (skill) {
        var index = $scope.optSkills.indexOf(skill);
        if (index > -1) {
            $scope.optSkills.splice(index, 1);
        }

    }
});