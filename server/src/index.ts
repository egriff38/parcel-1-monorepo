import Express from 'express';
import Bundler from 'client-bundler';

const app = Express()
app.use(Bundler.middleware())
// ...