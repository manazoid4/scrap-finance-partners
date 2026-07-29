export type ClientEngagementDraft = {
  internalReference: string;
  publication: {
    approved: boolean;
    publish: boolean;
  };
  profile: {
    name: string | null;
    location: string | null;
    identifyingDetails: string[];
  };
  caseStudy: {
    challenge: string | null;
    analysis: string | null;
    recommendation: string | null;
    observedOutcome: string | null;
  };
};

// Internal content scaffold only. Nothing in this record is rendered publicly.
// Keep publish false until the client has approved the exact public wording.
export const privateClientDraft: ClientEngagementDraft = {
  internalReference: "private-client",
  publication: {
    approved: false,
    publish: false,
  },
  profile: {
    name: null,
    location: null,
    identifyingDetails: [],
  },
  caseStudy: {
    challenge: null,
    analysis: null,
    recommendation: null,
    observedOutcome: null,
  },
};
