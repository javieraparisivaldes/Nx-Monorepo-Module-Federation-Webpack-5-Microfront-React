# POC react + Nx + Module Federation, Webpack
# Start POC all

1.npm run start (start app)

# Start POC separately

1.npm run start:main (open web container:3000)
2.npm run serve:callejero (bundle:3001)
3.npm run serve:users (bundle:3003)
4.npm run serve:libs (bundle with shared libs like react, react-dom ...:3002)

# Open MicroFronts Alone

1.for callejero microfront try http://localhost:3001
2.for users microfront try http://localhost:3003

# Test MicroFronts

1.npm run test:callejero (microfront callejero)
2.npm run test:users (microfront users)
3.npm run test (all microfronts)

# Build MicroFronts

1.npm run build:callejero (microfront callejero)
2.npm run build:users (microfront users)
3.npm run build (build all)