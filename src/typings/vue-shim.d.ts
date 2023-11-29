export {}
declare module 'vue' {
  interface ComponentCustomProperties {
    $filters: { [key: string]: Function }
  }
}
