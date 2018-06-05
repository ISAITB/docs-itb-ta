# Documentation for GITB software user guide

The GITB software user guide is built using restructured text and Sphinx. The theme used is the RTD (Read The Docs theme).

The current documentation refers to the perspective of an **Community Administrator**.

## Installation

Installation process described at: http://www.sphinx-doc.org/en/master/usage/installation.html

### Step 1

Download and install python. On windows do this get the installer from https://www.python.org/downloads/ (currently version 3.* is used).

On Linux do:

```
apt-get update
apt-get install -y python-pip python-dev build-essential
```

### Step 2

Install Sphinx `pip install -U sphinx`

### Step 3

Verify installation with `sphinx-build --version`

### Step 4

Install RTD theme: `pip install sphinx_rtd_theme`.
This is then used as "sphinx_rtd_theme"

## Use

To generate the HTML documentation issue (from the current folder): `make html`. The output is stored in folder "build"
To fully cleanup the produced documentation: `make clean`.

## Maintenance and updates

Given that organisation administrators have access to a superset of the functionality available to organisation users, this
repository has been setup using the organisation user repository as a seed. Specifically:

```
git clone -o seed_oa https://nsimatco@webgate.ec.europa.eu/CITnet/stash/scm/itb/docs-itb-oa.git ca
git remote add origin https://nsimatco@webgate.ec.europa.eu/CITnet/stash/scm/itb/docs-itb-ca.git
git push -u origin master
```

The result of the above commands is to add the organisation user repo as a "seed" for the current one. If changes occur in the 
common documentation then these are made in the "oa" repository and then they can be synchronised to the current one. This
synchronisation is best made on a branch off "ca"'s master in order to review all changes. Any customisations needed for the "ca"
can be made in this temporary branch before it is merged onto "ca"'s master. Note that for sharing and building purposes the "ca"'s
remote is named "origin" (the default). Use of the "seed" is optional and is provided only as a facility to avoid copying and pasting
common documentation across repositories.