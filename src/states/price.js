import { signal, computed } from '@preact/signals-react';

export const price = signal(100);
export const subtotal = computed(() => price * 1.05);
