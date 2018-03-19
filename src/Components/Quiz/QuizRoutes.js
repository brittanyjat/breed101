import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Results from './Results';

export default (
    <Switch>
        <Route path='/quiz/step1' component={Step1} />
        <Route path='/quiz/step2' component={Step2} />
        <Route path='/quiz/step3' component={Step3} />
        <Route path='/quiz/step4' component={Step4} />
        <Route path='/quiz/results' component={Results} />
    </Switch>
)