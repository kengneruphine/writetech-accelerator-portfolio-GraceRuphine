# Overview

This guide will walk you through the process of setting up CI/CD workflow using Github Actions.

Continuous Integration and Continuous Deployment (CI/CD) is a software practice that helps developers automate testing, building and deploying their applications. It is broken down into 2 parts:

- Continuous Integration(CI): it requires frequently committing code to a shared repository. This process enable errors to be detected faster reducing the amount of code a developer needs to debug when finding the source of an error.
- Continuous Deployment(Delivery): it uses automation to publish and deploy software updates.

With CI/CD, every time you push code to your repository, checks can run automatically to ensure the code works as expected and even deploy the app if everything passes.

Popular CI/CD tools are Github Actions, GitLab Pipelines, Jenkins, CircleCI.
In this guide, we will focus on Github Actions.

## GitHub Actions

Github Actions is Github's built-in tool that allows you to automate your build, test and deployment pipeline. You can create workflows that run tests whenever you push a change to your repository, or that deploy merged pull requests to production.

### Components of GitHub Actions

1. Workflows: A Workflow is an automated, configurable process that runs one or more jobs. Workflows are defined in YAML files, which are stored in the `.github/workflows` directory within a Github repository
2. Events: Events are specific activities that occur within a repository that trigger the execution of a workflow. They act as signals that tell GitHub Actions when to run a defined set tasks. Examples of events are push, pull request.
3. Jobs: A job is a set of steps in a workflow that execute on the same runner
4. Runners: A runner is a virtual machine or physical machine that execute jobs defined in your workflows. Example `Ubuntu-latest`.
5. Actions: An action is a reusable unit of work that performs a specific task within a workflow.