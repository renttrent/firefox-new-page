# Custom Firefox New Tab

This repo requires you to at least have: 
- New Tab Override [extension](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/) on Firefox.
- Unsplash API Access Key [here](https://unsplash.com/developers)
- New York Times API [here](https://developer.nytimes.com/apis)

After Getting API keys you should create a `.env` file in root folder or if you are using vercel you can add envoirnment variables from their dashboard.

My env vars are written as follows:
```
REACT_APP_NY_API={secret}
REACT_APP_UNSPLASH={secret}
```

You can add or remove links in the frontpage by editing the `links.json` file inside `src` folder.

Your link must look like this: 
```json
{
    // other links

    "youtube": {
        "link": "https://youtube.com",
        "icon": "FaYoutube"
    }

    // other links
}
```
I use react-icons and Fa Awsome, but you can choose your own favorite icon pack by editing imports at `src/App.tsx`.
Ex: changing for material icons:
```typescript
// from
import * as icons from "react-icons/fa"
// to
import * as icons from "react-icons/md"
```

## Future plans

Adding more frontpage views.

I encourage you to fork and open issues for this project.