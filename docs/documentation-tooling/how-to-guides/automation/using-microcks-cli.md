---
title:  Using Microcks CLI
---

This guide illustrates the usage of microcks-cli, a command-line tool for interacting with Microcks APIs. It allows you to launch tests or import API artifacts with minimal dependencies. The CLI is managed and released independently of the core Microcks server components in its own [GitHub repository](https://github.com/microcks/microcks-cli). It [connects to the API](/docs/documentation-tooling/how-to-guides/automation/connecting-to-microcks-api.md) using a [Service Account](https://microcks.io/documentation/explanations/service-account/), making it a valuable tool worth exploring.😉

The CLI also supports authenticated and non-authenticated modes when Microcks is deployed without Keycloak. You’ll still have to provide the client ID and secret to commands, but they will be ignored. See [issue #23](https://github.com/microcks/microcks-cli/issues/23) for more details.

## 1. Install the CLI

The CLI is provided as a binary distribution or can be used directly through a container image.

### Using Homebrew

You can install <span style={{ color: 'pink' }}>microcks-cli</span> using [Homebrew](https://brew.sh/).

```json
brew tap microcks/tap
brew install microcks-cli
```

### Binary distribution

The CLI binary releases are available for Linux, macOS or Windows platforms with different architectures on [GitHub releases](https://github.com/microcks/microcks-cli/releases). Just download the binary corresponding to your system and put it in the PATH somewhere. For example, on a Linux platform with <span style={{ color: 'pink' }}>amd64</span> architecture, you may run these commands:

```json
curl -Lo microcks-cli https://github.com/microcks/microcks-cli/releases/download/0.5.5/microcks-cli-darwin-amd64 \
    && chmod +x microcks-cli
```

### Container image

The <span style={{ color: 'pink' }}>microcks-cli</span> is also available as a container image so that you may run it without installing it. The hosting repository is on [Quay.io](https://quay.io/repository/microcks/microcks-cli?tab=info). You can simply pull the image to get it locally:

```json
docker pull quay.io/microcks/microcks-cli:latest
```

## 2. Launching a test

Assuming you are running the same examples as in the [Getting started](/docs/documentation-tooling/getting-started.md) and [Getting started with Tests](https://microcks.io/documentation/tutorials/getting-started-tests) tutorials, you may use this command line to launch a new test:

```json
microcks-cli test 'API Pastry - 2.0:2.0.0' http://host.docker.internal:8282 OPEN_API_SCHEMA \
    --microcksURL=http://host.docker.internal:8585/api/ \
    --keycloakClientId=microcks-serviceaccount \
    --keycloakClientSecret="ab54d329-e435-41ae-a900-ec6b3fe15c54" \
    --operationsHeaders='{"globals": [{"name": "x-api-key", "values": "azertyuiop"}], "GET /pastries": [{"name": "x-trace-id", "values": "qsdfghjklm"}]}' \
    --insecure --waitFor=6sec
```

With some explanations on arguments and flags:

- 1st argument is API name and version separated with :,
- 2nd argument is the Application endpoint to test,
- 3rd argument is the testing strategy to execute,
- <span style={{ color: 'pink' }}>--flags</span> are contextual flags for API endpoints, authentication, timeouts, etc.

The same command can also be executed using the container image:

```json
docker run -it quay.io/microcks/microcks-cli:latest microcks-cli test \
    'API Pastry - 2.0:2.0.0' http://host.docker.internal:8282 OPEN_API_SCHEMA \
    --microcksURL=http://host.docker.internal:8585/api/ \
    --keycloakClientId=microcks-serviceaccount \
    --keycloakClientSecret="ab54d329-e435-41ae-a900-ec6b3fe15c54" \
    --operationsHeaders='{"globals": [{"name": "x-api-key", "values": "azertyuiop"}], "GET /pastries": [{"name": "x-trace-id", "values": "qsdfghjklm"}]}' \
    --insecure --waitFor=6sec
```

Check the <span style={{ color: 'pink' }}>microcks-cli</span> [README](https://github.com/microcks/microcks-cli/blob/master/README.md) for full instructions on arguments and flags.

## Wrap-up

You have learned how to install and use the Microcks CLI to launch a new test. This is what you would typically do within your CI/CD pipeline to ensure that the application you just deployed correctly implements the API specifications.

Microcks CLI also provides the import command that allows you to push artifacts into the Microcks repository. This command requires that you have a Service Account with more privileges than the default one, though. You may follow up on this guide by learning more about [Service Accounts](https://microcks.io/documentation/explanations/service-account).

The CLI provides the helpful commands <span style={{ color: 'pink' }}>version</span> and <span style={{ color: 'pink' }}>help</span> to get basic information on it. Check the <span style={{ color: 'pink' }}>microcks-cli</span> [README](https://github.com/microcks/microcks-cli/blob/master/README.md)  for full instructions on available commands depending on your version.
