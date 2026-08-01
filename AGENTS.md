# SeaVic Website Project Instructions

## Purpose

These instructions govern all Codex work in the SeaVic website repository.

The repository supports the SeaVic Consulting staging website:

- Repository: `seavic/seavicAI`
- Website: `https://staging.seavicai.com`
- Framework: Astro static site
- Package manager: `pnpm@11.9.0`
- Deployment platform: GitHub Pages
- Deployment workflow: `.github/workflows/pages.yml`
- Deployment branch: `main`

Treat these instructions as the default operating procedure for every task in this repository.

## Source of Business Requirements

Website strategy, service positioning, brand direction, approved copy, page structure, and acceptance criteria are normally developed in the ChatGPT project named:

`SeaVic - Lui Private Command Center`

When the user provides an implementation brief from that project:

- Treat the approved brief as the source of truth.
- Preserve approved wording unless a minor technical adjustment is required.
- Do not independently reposition SeaVic or substantially rewrite approved content.
- Clearly report any necessary deviation before implementing it.
- Do not invent client names, credentials, certifications, partnerships, case studies, statistics, savings claims, testimonials, or regulatory claims.

## Core Git Safety Rules

Never work directly on `main` for a file-changing task.

For any task that changes repository files:

1. Confirm the working tree is clean.
2. Switch to `main`.
3. Fetch `origin`.
4. Pull `origin/main` using fast-forward only.
5. Confirm local `main` matches `origin/main`.
6. Create or use a task-specific branch named:
   `codex/<short-descriptive-name>`
7. Make all changes on that feature branch.

Examples:

- `codex/update-services-page`
- `codex/add-ai-cost-governance`
- `codex/revise-homepage-copy`
- `codex/fix-mobile-navigation`

Do not:

- Commit directly to `main`.
- Push directly to `main`.
- Force-push `main`.
- Merge into `main`.
- Rebase or rewrite shared history without explicit approval.
- Run `git init`.
- Work from backup folders.
- copy an old repository over the clean checkout.
- manually upload routine website files to GitHub.

If the working tree contains unexpected changes, stop and report them before proceeding.

If the current branch belongs to another unfinished task, stop and ask whether to continue, preserve, or discard that work.

## Git Identity

Use repository-local Git identity settings:

- Name: `Lui Sieh`
- Email: `307777572+siehlui-seavic@users.noreply.github.com`

Before the first commit in a new environment, verify:

- `git config user.name`
- `git config user.email`

Do not use a private email address in commits.

## Approval Boundaries

Codex may perform the following without separate reminders when required by the user’s task:

- Inspect repository files.
- Synchronize `main`.
- Create a feature branch.
- Edit files on that feature branch.
- Install dependencies using the existing lockfile.
- Run builds, tests, scans, and link checks.
- Explain changes and prepare a proposed diff.

Codex must not perform the following without explicit user approval:

- Commit changes.
- Push a branch.
- Create or update a pull request.
- Merge a pull request.
- Delete a remote branch.
- Modify deployment architecture.
- Add or upgrade dependencies.
- Change a custom domain.
- Change production or staging branch behavior.
- Expose credentials, secrets, or personal data.

When asked to implement a change, complete the edits and validation, then stop for review before committing unless the user explicitly authorizes commit and push in the same instruction.

## Protected Files

Treat the following files as protected:

- `.github/workflows/pages.yml`
- `public/CNAME`
- `astro.config.mjs`
- `package.json`
- `pnpm-lock.yaml`

Do not modify these files unless:

1. The requested task genuinely requires the change.
2. The reason is clearly explained.
3. The smallest necessary change is proposed.
4. The user explicitly approves the configuration or dependency change.

Preserve:

- `site: "https://staging.seavicai.com"` in Astro configuration.
- `staging.seavicai.com` in `public/CNAME`.
- GitHub Pages deployment from `main`.
- The active workflow under `.github/workflows/`.

There must not be a duplicate workflow under a top-level `workflows/` directory.

## Generated and Local Files

Never commit generated, cached, dependency, environment, or machine-specific files.

These must remain untracked:

- `.git/`
- `node_modules/`
- `dist/`
- `.astro/`
- `.pnpm-store/`
- `.env`
- `.env.*`, except approved example files
- log files
- temporary upload packages
- local backup folders
- local development-server logs

Do not copy these folders from another location.

## Implementation Standards

For website changes:

- Follow the existing Astro project structure.
- Reuse existing components and patterns where practical.
- Keep changes scoped to the approved task.
- Avoid unrelated refactoring.
- Avoid introducing dependencies when existing capabilities are sufficient.
- Preserve responsive behavior.
- Preserve accessible semantic markup.
- Preserve functional navigation and internal links.
- Keep image sizes and formats appropriate for web use.
- Do not introduce placeholder or speculative business claims.
- Do not silently remove existing content.
- Do not change unrelated styling, copy, or layout.

If a requested implementation creates significant architectural complexity, explain the trade-off before proceeding.

## Content and Claims Controls

SeaVic presents an executive, trusted, pragmatic, modern, and senior-led advisory brand.

Website content must:

- Be practical and business-oriented.
- Avoid unsupported superlatives.
- Avoid generic AI hype.
- Avoid fearmongering.
- Avoid claiming guaranteed results.
- Avoid claiming specific cost reductions unless substantiated and approved.
- Avoid presenting draft partner relationships as finalized.
- Avoid disclosing confidential client or project information.
- Distinguish current capabilities from future aspirations.
- Preserve human accountability in AI governance and agentic-AI messaging.

If source material does not substantiate a claim, flag it instead of publishing it.

## Required Validation

After every file-changing task, run the complete validation suite:

```text
pnpm install --frozen-lockfile
pnpm run claims:scan
pnpm run build
pnpm run links:check
node tests/check-release.mjs
```

Do not skip validation because a change appears small or documentation-only.

If a check fails:

1. Identify and explain the root cause.
2. Apply the smallest defensible correction.
3. Do not weaken, remove, or bypass the check.
4. Re-run the complete validation suite.
5. Report any remaining failure honestly.

A change is not ready to commit until all required checks pass, unless the user explicitly accepts a documented exception.

## Pre-Commit Review

Before requesting approval to commit, report:

1. Current branch.
2. Every changed, added, and deleted file.
3. The purpose of each change.
4. Whether generated files are present.
5. Whether secrets, credentials, private emails, or personal data are present.
6. Whether any protected file changed.
7. Whether dependencies changed.
8. Whether all validation commands passed.
9. Whether the implementation satisfies the stated acceptance criteria.
10. Any known risk, limitation, or deviation.

Show the relevant Git diff or a clear summary of it.

Do not commit until the user approves, unless the user's current instruction explicitly authorizes the commit.

## Commit Rules

When authorized to commit:

- Commit only reviewed files.
- Use a concise action-oriented commit message.
- Do not amend an existing published commit unless explicitly authorized.
- Confirm the working tree is clean after committing.
- Report:
  - branch name
  - commit hash
  - commit message
  - files included
  - whether the branch is ahead of `main`

Examples of acceptable commit messages:

- `Update AI governance service messaging`
- `Add AI cost governance assessment page`
- `Improve mobile navigation accessibility`
- `Revise homepage positioning and calls to action`

Avoid vague messages such as:

- `Updates`
- `Changes`
- `Website fix`
- `New version`

## Push Rules

When explicitly authorized to push:

- Push only the current feature branch.
- Set its upstream tracking branch.
- Never push directly to `main`.
- Do not force-push unless explicitly authorized and justified.
- Report:
  - push result
  - remote branch
  - upstream tracking status
  - pull-request creation URL

If GitHub rejects a push because of email privacy, verify the commit author and committer use:

`307777572+siehlui-seavic@users.noreply.github.com`

Do not disable GitHub email privacy protection.

## Pull Request Rules

Pull requests must target:

- Base branch: `main`
- Compare branch: the current `codex/...` feature branch

A pull-request description should include:

- Summary of changes
- Business purpose
- Files or areas affected
- Validation commands run
- Validation results
- Acceptance criteria
- Known limitations, if any

On a pull request:

- The build job should run.
- The deploy job should normally be skipped.
- Do not interpret a skipped PR deployment as a failure.
- Do not merge while checks are failing or conflicts exist.

Codex must not merge the pull request unless the user explicitly instructs it to do so.

## Deployment Behavior

A merge or push into `main` triggers the GitHub Pages deployment workflow.

For a successful `main` run, expect:

- `build` — successful
- `deploy` — successful

The staging website is:

`https://staging.seavicai.com`

After deployment:

- Verify the expected content is visible.
- Verify navigation and links.
- Verify images and styling.
- Verify responsive behavior where relevant.
- Confirm no unrelated content changed.

Do not revert to manual GitHub file uploads when deployment fails. Inspect and diagnose the GitHub Actions failure instead.

## Post-Merge Synchronization

After the user confirms a pull request was merged:

1. Confirm the working tree is clean.
2. Switch to `main`.
3. Fetch `origin`.
4. Pull `origin/main` using fast-forward only.
5. Confirm local `main` matches `origin/main`.
6. Delete the merged local feature branch only after Git confirms it is fully merged.
7. Prune stale remote-tracking references.
8. Delete the remote feature branch only with user approval or when the user has already deleted it through GitHub.
9. Report:
   - current branch
   - latest commit
   - working-tree status
   - whether local `main` matches `origin/main`

The repository is ready for another task only when:

- Current branch is `main`.
- Working tree is clean.
- Local `main` matches `origin/main`.

## Read-Only Tasks

For inspection, analysis, or explanation tasks that do not require file changes:

- Do not create a feature branch unnecessarily.
- Do not install dependencies unless required.
- Do not modify files.
- Clearly state that the task was read-only.
- Report the current repository state accurately.

## Failure and Ambiguity Handling

Stop and ask for clarification when:

- Requirements conflict.
- Approved copy is missing or contradictory.
- A task would alter deployment architecture.
- A task requires an unapproved dependency.
- Unexpected local changes exist.
- The repository is not synchronized.
- A destructive action is requested ambiguously.
- The requested behavior could expose secrets or private information.
- The desired production behavior is unclear.

Never conceal a failed command, failed validation, incomplete deployment, or uncertain result.

## Definition of Done

A normal website change is complete only when:

1. Requirements are implemented on a feature branch.
2. All required validations pass.
3. The user reviews and approves the changes.
4. Changes are committed.
5. The feature branch is pushed.
6. A pull request is created and checks pass.
7. The pull request is merged into `main`.
8. The `main` build and deployment succeed.
9. `https://staging.seavicai.com` is verified.
10. Local `main` is synchronized with `origin/main`.
11. The working tree is clean.
12. Merged branches are cleaned up.

Do not represent work as fully deployed until the GitHub Pages deploy job and staging-site verification are complete.
