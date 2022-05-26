import { PlasmicRootProvider, PlasmicComponent } from '@plasmicapp/loader-react';
import { PLASMIC } from './plasmic-init';

function MyComponent() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="Homepage"   />
    </PlasmicRootProvider>
  );
}
export default MyComponent;