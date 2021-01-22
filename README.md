# Vanilla JS SPA

This project is a single page application solely written in Vaniila JS (ES 6+).

## How To Execute

```zsh
npm install
npm run build
npx serve -s build
```

Open [http://localhost:5000](http://localhost:5000) to view from a browser.

## Project Structure

```txt
.
├── build                           
├── config                          
│   ├── jest.config.js              # Jest configuration
│   ├── webpack.common.js           # Webpack configuration
│   ├── webpack.dev.js              # Webpack Dev configuration
│   └── webpack.prod.js             # Webpack Prod configuration
├── node_modules                    
├── public                          
│   └── static                      # images and css
│   
├── src                             
│   ├── components                  
│   │   ├── Box.js                  # Display, Spacing and dropzone
│   │   ├── Button.js               # Call-To-Action, Navigation and Drag & Drop
│   │   ├── Container.js            # A mold for a view
│   │   ├── Helmet.js               # A changer for page title and meta tags.
│   │   ├── ImageButton.js          # A button component with <image>
│   │   ├── Link.js                 # Uses pushstate() from Web History API 
│   │   └── Router.js               # Render components by url
│   │
│   ├── layouts                     
│   │   └── MainLayout              
│   │       ├── index.js            
│   │       └── TopBar.js           # <header>
│   │
│   ├── utils                       
│   │   ├── color.js                # Stringfy rgba() from CSS func
│   │   ├── context.js              # Mocks context API
│   │   ├── dom.js                  # DOM API extension
│   │   ├── events.js               # Custom events
│   │   ├── ids.js                  # Dataset ids
│   │   ├── images.js               # A collector for images
│   │   └── localStorage.js         # LocalStorage extension
│   │
│   ├── views                       
│   │   ├── alarm               
│   │   │   └── AlarmView           
│   │   │       ├── AlarmField.js   
│   │   │       ├── index.js        
│   │   │       └── TimeField.js    
│   │   ├── error                   
│   │   │   └── NotFoundView        
│   │   │       └──index.js         
│   │   ├── home                    
│   │   │   └── HomeView            
│   │   │       └──index.js         
│   │   ├── memo                    
│   │   │   └── MemoView            
│   │   │       ├── index.js        
│   │   │       ├── MemoField.js    
│   │   │       └── TextField.js    
│   │   └── photo                   
│   │       └── PhotoView           
│   │           └──index.js         
│   │
│   ├── App.js                      
│   ├── index.js                    
│   └── routes.js                   
│   
├── tests                           
├── .babelrc                        
├── .eslintrc                       
├── .jsconfig.json                  
├── .package.json                   
└── README.md
```

## Technical Stacks

- EKMA 6
- Webpack 5
- ESlint 7
- HTML 5
- CSS 3
- Jest 26

## Scripts

Inside the project directory, following commands are available:

### `npm start`

Run the app in development mode\
Open [http://localhost:8080](http://localhost:8080) to view the app.

Hot reloads after updating code.

### `npm test`

Runs jasmine2 from Jest's test runner and execute tests inside `tests/`.

### `npm build`

Produces a production mode app inside `build/`.\
Optimizes the app for the best performance.

This build is minified.

## Notes

TBD
