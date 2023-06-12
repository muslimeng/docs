---
title: Want to Contribute to MES Docs?
description: The need-to-know details about contributing to this project.
---

So, you're ready to contribute to the MES Docs? Yay! We're excited to see what you have to share with the greater community.

To make sure all contributions have the same styling and approved in timely manners, there are a few steps that you need to follow. Don't worry, they're not too hard, so even if you haven't used Github before, you'll get off the ground running pretty quickly!

:::caution
Should you feel like the steps below are overwhelming, skip to [here](#ok-but-this-is-too-hard).
:::

## Create an Issue in the Docs Repo

The first step is to create an "Issue" in the Github repo for this project ([link here](https://github.com/muslimeng/docs/issues)).

:::note
Each Issue will be related to one Pull Request (PR). Each PR should only have *one* docs insertion/focus! Do not make multiple docs under one Issue/PR.
:::

In the issue, you'll want to do the following things:

1. Title the issue whatever will be the title of the docs you're inserting, or the focus of the issue (might be editing another doc). 

2. Copy-paste the template below into the "Leave a comment" box, and fill in the fields that are marked. Delete/replace any text that is surrounded by `[ ]`. Then, create the issue.
```md
**Your Full Name:** [TODO]
**Your Uniqname:** [TODO]

[Possible reasons: Discussion, New Insertion, Docs Edit, Removal Request, Other]
**Reason for issue:** [TODO]
**Describe your contribution:** [TODO]
```

3. On the Issue's main page, right sidebar you should see the option "Development" (see image below). Click the gear icon, then "create a branch". 

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/956698926092779550/1117608516165832756/image.png" alt="Point 3 --> Image"/>
</p>

:::note
If you are asked for the following, use these settings:

- Clone from branch "main". NO OTHER BRANCH.
- Name the branch `<uniqname>-<issue #>` if you can. If not, keep it the default name.
:::

## Development

Any issue that is not creating a new doc should be fairly straightforward. However, the general steps for creation/editing include the below.

### Cloning the repo

To actually start developing, you need to get a copy of the repository on your computer. Make sure your computer has `git` installed, and that you're in a working directory. Open a terminal, and execute the following:

```sh
git clone https://github.com/muslimeng/docs.git
cd ./docs
git checkout <name of the branch you just made>
```

### Workflow

1. Create a `.md` file in the folder you want, with a name that follows "all lowercase and only hyphens" convention. You may also want to create your own folder in certain cases. 

2. At the top of your file, copy paste and fill in this template:
```md
---
title: [TODO - Docs title]
description: [TODO - Docs description]
author: [TODO - Uniqname of *page creator*. There should only be one.]
editors: [Leave empty. Or add your name here if you are *not* the page creator]
last_edited: [TODO - Date of last edit to the doc (MM/DD/YY)]
---
```

3. Author/edit the page using [this as a guide](https://starlight.astro.build/guides/authoring-content/#inline-styles) for the `.md` filetype.

4. If you are creating a new doc, you need to add your doc to the sidebar. This is done through the file in the root directory called `astro.config.mjs`. Under `integrations -> starlight -> sidebar`, find the sidebar title you want, and add a new JSON in the array of `items`, formatted like this:
```js
{ label: '<name of sidebar item>', link: '/path/to/your-page' }
```
5. If you're done, commit and push your code back to your branch:
```sh
git fetch # check if there were any changes on the repo
git pull # good practice even if nothing to pull from repo
git add --a
git commit -m "<info of the edits you made>"
git push
```

You can now repeat steps 1-5 as many times as you wish until you complete the issue you described. Codebase maintainers will then take over to review your changes, and will talk with you through your Github issue should they have any questions.

## Previewing Your Edits

If you want to preview your edits, open the terminal and go through these steps:

```sh
# make sure you're in the root directory of the project.
npm i # will install relevant packages. Make sure you have npm installed.
npm run dev
# go to http://localhost:3000 in your browser, and voila!
```

This step is optional, but it will allow your contributions to be accepted more quickly.

## OK but this is too hard :/

Totally fine! We know this can be overwhelming, especially for those who may not have had prior coding/Github experience. In that case, go through the first step of [creating the Github issue](#create-an-issue-in-the-docs-repo), *without* following step 3. Then, add another comment with a link to a Google doc, plain text, or whatever is easiest to write out your contribution. If it's a new doc, make sure to include a title for it! A codebase maintainer will take over the coding side of things and implement your contribution!

Want an even *easier* way to contribute? Send an email to [mes-board@umich.edu](mailto:mes-board@umich.edu) with the subject line `New MES Docs Contribution`, and give us a detailed description of the contribution you'd like to make. This avenue will take a bit longer than the above two processes described, but it will be the easiest way to contribute.



