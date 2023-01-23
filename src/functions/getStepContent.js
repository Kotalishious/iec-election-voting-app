import Tnc from "../components/tnc";
import Parliamentary from "../components/parliamentary";
import Referendums from "../components/referendums";
import VoteSummary from "../components/voteSummary";

function GetStepContent(step) {
    switch (step) {
        case 0:
            return <Tnc/>;
        case 1:
            return <Parliamentary/>
        case 2:
            return <Parliamentary/>
        case 3:
            return <Referendums/>
        case 4:
            return <VoteSummary/>
        default:
            return "unknown step";
    }
}

export default GetStepContent;