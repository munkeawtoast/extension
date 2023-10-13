export interface LoadoutTFItemManager extends Element {
  /**
   * details
   */
  '#tl': {
    /**
     * must remove tailing ~_
     */
    id: string
  }

  /**
   * .item-manager-item-detail
   */
  '#il': Element
}

export interface LoadoutTFActiveItem {}
