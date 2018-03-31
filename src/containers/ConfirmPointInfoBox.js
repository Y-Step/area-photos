import * as R from 'ramda';
import { compose, branch, renderNothing, mapProps } from 'recompose';

import { ConfirmPointInfoBoxC } from '../components/ConfirmPointInfoBox';
import { withAppState } from './AppState';

export const ConfirmPointInfoBox = compose(
  withAppState(['coords', 'currentRoute']),
  branch(
    R.complement(R.path(['state', 'coords', 'lat'])),
    renderNothing,
  ),
  mapProps(
    ({ state: { coords }, actions }) => ({
      position: coords,
      onCancel: () => actions.coords.setCoords({}),
      onConfirm: () => actions.currentRoute.setRoute('images'),
    })
  )
)(ConfirmPointInfoBoxC);
