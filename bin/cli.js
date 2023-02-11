#!/usr/bin/env node

const { execSync } = require('child_process')

const runCommand = command => {
    try {
        execSync(`${command}`, { stdio: 'inherit' })
    } catch (error) {
        console.log(`Failed to executed command`, error)
        return false
    }
    return true
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://github.com/darkterminal/vite-react-tailwind-boilerplate.git ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`
const removeBinDirectory = `cd ${repoName} && rm -r bin`

console.log(`Cloning repository with name ${repoName}`)
const checkedOut = runCommand(gitCheckoutCommand)
if (!checkedOut) process.exit(-1)

console.log(`Installing dependencies for ${repoName}`)
const installedDeps = runCommand(installDepsCommand)
if (!installedDeps) process.exit(-1)

const removeBin = runCommand(removeBinDirectory)
if (!removeBin) process.exit(-1)

console.log(`Configuration ready! New you can move to ${repoName} using this command:`)
console.log(`cd ${repoName} && npm run dev`)
console.log(`Happy hacking!`)