import http from "./http";

const apiEndpoint = "/api/participants";

export function getParticipants() {
  return http.get(apiEndpoint);
}

export function registerParticipant(participant) {
  return http.post(apiEndpoint, {
    firstName: participant.firstName,
    lastName: participant.lastName,
    email: participant.email,
    organisation: participant.organisation,
  });
}
