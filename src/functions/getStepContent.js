import Tnc from "../components/tnc";
import Parliamentary from "../components/parliamentary";
import Referendums from "../components/referendums";
import VoteSummary from "../components/voteSummary";
import React, {useState} from 'react';
import {localGovCandidates, parliamentaryCandidates} from "../asserts/simmulationData";

function GetStepContent(step) {
    const [parliamentaryElect, setParliamentaryElect] = useState();
    const [localGovElect, setLocalGovElect] = useState();
    const [referendumAnswer, setReferendumAnswer] = useState();
    switch (step) {
        case 0:
            return <Tnc/>;
        case 1:
            return <Parliamentary
                setElected={setParliamentaryElect}
                elected={parliamentaryElect}
                candidates={parliamentaryCandidates}
            />
        case 2:
            return <Parliamentary
                setElected={setLocalGovElect}
                elected={localGovElect}
                candidates={localGovCandidates}
            />
        case 3:
            return <Referendums
                referendumAnswer={referendumAnswer}
                setReferendumAnswer={setReferendumAnswer}
            />
        case 4:
            return <VoteSummary
                parliamentaryElect={parliamentaryElect}
                localGovElect={localGovElect}
                referendumAnswer={referendumAnswer}
            />
        default:
            return "unknown step";
    }
}

export default GetStepContent;