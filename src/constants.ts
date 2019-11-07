import * as core from "@actions/core";
import * as github from "@actions/github";

const { pusher, repository } = github.context.payload;

export const workspace: any = process.env.GITHUB_WORKSPACE;

// The build folder that stores the deployment data.
export const build = core.getInput("FOLDER", { required: true });

// Required action data.
export const action = {
  gitHubRepository: repository ? repository.full_name : "",
  gitHubToken: core.getInput("GITHUB_TOKEN"),
  accessToken: core.getInput("ACCESS_TOKEN"),
  branch: core.getInput("BRANCH"),
  baseBranch: core.getInput("BASE_BRANCH") || "master",
  pusher
};

// Repository path used for commits/pushes.
export const repositoryPath = `https://${action.accessToken ||
  `x-access-token:${action.gitHubToken}`}@github.com/${
  action.gitHubRepository
}.git`;
