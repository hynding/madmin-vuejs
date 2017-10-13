# madmin-vuejs
Material Admin Panel using Vue.js

# Architecture

## Domain Driven Source (/src)

Source code is categorized by domain and sub-divided by it's intended purpose. 
The source of truth for functionality and view are at the root, respectfully 
index.js and index.html. Aside from "core" and "layout", domains ahere to sub-directories 
"form", "list" and "profile" for their BREAD (Browse, Read, Edit, Add, Delete/Destroy) or CRUD 
influenced patterns.

### Core Functionality (/src/core)

This serves the common utility providers unique to the application but functional to service any domain.

### Layout (/layout)

UI layer designed to behave independently of contents

### Session (/session)

MVVM set for the session, "form" represents the login and recovery options, 
"list" for existing sessions and "profile" for the details of a specific session.

### User (/user)

MVVM set for the user, "form" represents the registration and update options.

### Pitch (/pitch)

MVVM set for the pitch and/or purpose of the site.

