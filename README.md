# vue-test-utils-find-issue

## Step to reproduce

1. `yarn install`
2. `yarn test`
3. `find('[data-test-id=child]')` should get `Child` component and emulate `click` event successfully. But it gets another component (probably `Wrapper`?) and `click` emulation is failed.
