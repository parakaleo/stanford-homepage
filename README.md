# Parakaleo Stanford Site

https://parakaleo.stanford.edu

### Usage:

In development mode, run `yarn dev`. This
- starts livereload
- enables WYSIWYG editing in the console via calls to `edit()` and `save()`
- livereload also works across ngrok tunnels :)

To save work, add routinely changing information to
`js/macros.js`.  Upcoming seminar offerings and their
dates are a good candidate of things to put in
there...

### Book keeping:
For posterity, it may be a good idea to keep documents, fliers, recordings, etc.
in the `documents` directory and linked in the `resources.html` page.

### Deployment

The `afs` path to the stanford.edu Parakaleo webroot is
`/afs/ir.stanford.edu/group/parakaleo/`.

This is served at the long url https://web.stanford.edu/group/parakaleo/.

To obtain/renew the parakaleo.stanford.edu vanityurl, check the following steps:

* Ensure you have a sunet ID
* Ensure you're a member of the "parakaleo" workgroup at https://workgroup.stanford.edu/ (parakaleo.lawry@stanford.edu is admin for this)
* Go to https://vanityurl.stanford.edu/ and check if you can manage the parakaleo.stanford.edu subdomain. If not, we need to re-request this url by requesting a new subdomain.
  * Use the parakaleo workgroup as the workgroup.
  * Set the long URL to https://web.stanford.edu/group/parakaleo/

To publish changes, navigate to that directory and git pull the `gh-pages`
branch.
