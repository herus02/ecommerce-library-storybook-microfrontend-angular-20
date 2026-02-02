import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState({ items: [] as any[], total: 0 }),
  withMethods((store) => ({
    addToCart(product: any) {
      const updatedItems = [...store.items(), product];
      patchState(store, {
        items: updatedItems,
        total: updatedItems.reduce((acc, item) => acc + item.price, 0)
      });
    },
  }))
);
