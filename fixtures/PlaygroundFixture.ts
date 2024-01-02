import  test  from '../LambdaTest'
// import test from '@playwright/test'
import SeleniumPlayground from '../pageobjects/SeleniumPlayground'
import InputForm from '../pageobjects/InputPOM'
import SimpleForm from '../pageobjects/SimpleForm'
import RangeSliders from '../pageobjects/RangeSliders'

export type PlaygroundFixture = {
    sForm : SimpleForm
    playground : SeleniumPlayground
    iform : InputForm
    slider : RangeSliders
}

export const ftest = test.extend<PlaygroundFixture>({

    playground: async({page}, use) => {
        const selPage = new SeleniumPlayground(page)
        await use(selPage);
      },
    
    sForm: async({page}, use) => {
        const sPage = new SimpleForm(page)
        await use(sPage);
    },

    iform: async({page}, use) => {
        const iformPage = new InputForm(page)
        await use(iformPage);
    },

    slider: async({page}, use) => {
        const slidePage = new RangeSliders(page)
        await use(slidePage);
    }
})

export default ftest
