import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const STYLES = {
  CONTAINER: {
    position: 'relative',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    borderRadius: 12
  },
  CARD: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transition: 'all 0.6s',
    borderRadius: 12
  },
}

export function getOpacity(position) {
  if (position === POSITION.HIDDEN) return 0
  return 1
}

export function getZIndex(position, baseZIndex = 0) {
  if (position === POSITION.HIDDEN) return baseZIndex
  if (position === POSITION.CURRENT) return baseZIndex + 2
  return baseZIndex + 1
}

export function getTransform(position, alignment, spread) {
  const { prev, next } = _getTranslationDistances(spread)

  if (alignment === ALIGNMENT.HORIZONTAL) {
    if (position === POSITION.PREV) return `translate(${prev}, -50%) scale(0.82) rotate(-7deg)`
    if (position === POSITION.NEXT) return `translate(${next}, -50%) scale(0.82) rotate(7deg)`
  }
  if (alignment === ALIGNMENT.VERTICAL) {
    if (position === POSITION.PREV) return `translate(-50%, ${prev}) scale(0.82)`
    if (position === POSITION.NEXT) return `translate(-50%, ${next}) scale(0.82)`
  }
  if (position === POSITION.HIDDEN) return `translate(-50%, -50%) scale(0.5)`

  return 'translate(-50%, -50%)'
}

export function getBoxShadow(position, alignment, disable_box_shadow) {
  if (!disable_box_shadow && position !== POSITION.HIDDEN) {
    if (alignment === ALIGNMENT.HORIZONTAL) {

      return position === POSITION.CURRENT
        ? '0 20px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
        // ? '30px 10px 20px -20px rgba(0, 0, 0, .4), -30px 10px 20px -20px rgba(0, 0, 0, .4)'
        : '0 20px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      }
      if (alignment === ALIGNMENT.VERTICAL) {
      return position === POSITION.CURRENT
        ? '0px 30px 20px -20px rgba(0, 0, 0, .4), 0px -30px 20px -20px rgba(0, 0, 0, .4)'
        : '0 20px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      // return '0px 30px 20px -20px rgba(0, 0, 0, .4), 0px -30px 20px -20px rgba(0, 0, 0, .4)'
    }
  }
  return 'unset'
}

export function getCursor(position, alignment) {
  if (position === POSITION.NEXT) {
    if (alignment === ALIGNMENT.HORIZONTAL) return 'e-resize'
    if (alignment === ALIGNMENT.VERTICAL) return 's-resize'
  }
  if (position === POSITION.PREV) {
    if (alignment === ALIGNMENT.HORIZONTAL) return 'w-resize'
    if (alignment === ALIGNMENT.VERTICAL) return 'n-resize'
  }
  return 'unset'
}

function _getTranslationDistances(spread) {
  let prev, next
  if (spread === SPREAD.MEDIUM) {
    prev = '-85%'
    next = '-15%'
  } else if (spread === SPREAD.NARROW) {
    prev = '-75%'
    next = '-25%'
  } else if (spread === SPREAD.WIDE) {
    prev = '-95%'
    next = '-5%'
  }

  return { prev, next }
}
export const POSITION = {
  PREV: 'prev',
  NEXT: 'next',
  CURRENT: 'current',
  HIDDEN: 'hidden',
}

export const ALIGNMENT = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
}

export const SPREAD = {
  NARROW: 'narrow',
  MEDIUM: 'medium',
  WIDE: 'wide',
}

class Cards extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current_index: props.disable_fade_in ? props.initial_index : null,
      interval: null,
    }
  }

  static propTypes = {
    alignment: PropTypes.oneOf([ALIGNMENT.HORIZONTAL, ALIGNMENT.VERTICAL]),
    spread: PropTypes.oneOf([SPREAD.NARROW, SPREAD.MEDIUM, SPREAD.WIDE]),
    initial_index: PropTypes.number,
    disable_keydown: PropTypes.bool,
    disable_box_shadow: PropTypes.bool,
    disable_fade_in: PropTypes.bool,
    autoplay: PropTypes.bool,
    autoplay_speed: PropTypes.number,
    afterChange: PropTypes.func,
  }

  static defaultProps = {
    alignment: ALIGNMENT.HORIZONTAL,
    spread: SPREAD.MEDIUM,
    initial_index: 0,
    disable_keydown: true,
    disable_box_shadow: false,
    disable_fade_in: false,
    autoplay: false,
    autoplay_speed: 5000,
    afterChange: () => {},
  }

  /**
   * @public
   * Sets current index state
   */
  goTo = (idx) => {
    this.setState({ current_index: Number(idx) }, this.props.afterChange)
  }

  /**
   * @public
   * Goes to next card
   */
  next = () => {
    if (this._is_mounted) {
      this._cardOnClick(POSITION.NEXT)
    }
  }

  /**
   * @public
   * Goes to previous card
   */
  prev = () => this._cardOnClick(POSITION.PREV)

  /**
   * @public
   * Gets current card index
   */
  getCurrentIndex = () => this.state.current_index

  componentDidMount() {
    const { initial_index, disable_keydown, disable_fade_in, autoplay } = this.props

    this._is_mounted = true

    // Triggers initial animation
    if (!disable_fade_in)
      setTimeout(() => {
        this.setState({ current_index: initial_index })
      }, 0.25)

    // Sets right and left key event listener
    if (!disable_keydown) {
      document.onkeydown = this._keydownEventListener
    }

    // Sets autoplay interval
    if (autoplay) this._autoplay()
  }

  componentWillUnmount() {
    this._is_mounted = false
    if (!this.props.disable_keydown) document.onkeydown = null
  }

  /**
   * Event listener for left/right arrow keys
   */
  _keydownEventListener = (e) => {
    if (e.which === 39) {
      return this.next()
    }
    if (e.which === 37) {
      return this.prev()
    }
  }

  /**
   * Sets interval for advancing cards
   */
  _autoplay = () => {
    if (this._is_mounted) {
      const { autoplay_speed } = this.props
      const interval = setInterval(this.next, autoplay_speed)
      this.setState({ interval })
    }
  }

  /**
   * Resets autoplay interval
   */
  _resetInterval = () => {
    clearInterval(this.state.interval)
    this._autoplay()
  }

  /**
   * Gets card class for a specific card index
   * @param {Number} index
   * @returns {String}
   */
  _getCardClass = (index) => {
    const { children } = this.props
    const { current_index } = this.state

    if (current_index === null) return POSITION.HIDDEN

    if (index === current_index) return POSITION.CURRENT

    if (index === current_index + 1 || (index === 0 && current_index === React.Children.count(children) - 1)) {
      return POSITION.NEXT
    }

    if (index === current_index - 1 || (index === React.Children.count(children) - 1 && current_index === 0)) {
      return POSITION.PREV
    }

    return POSITION.HIDDEN
  }

  /**
   * Changes current_index state
   * @param {String} position
   */
  _cardOnClick = (position) => {
    const { children, autoplay } = this.props
    const { current_index } = this.state

    if (autoplay) this._resetInterval()

    if (position === POSITION.NEXT) {
      if (current_index === React.Children.count(children) - 1) {
        this.setState({ current_index: 0 }, this.props.afterChange)
      } else this.setState({ current_index: current_index + 1 }, this.props.afterChange)
    } else if (position === POSITION.PREV) {
      if (current_index === 0) {
        this.setState({ current_index: React.Children.count(children) - 1 }, this.props.afterChange)
      } else this.setState({ current_index: current_index - 1 }, this.props.afterChange)
    }
  }

  /**
   * @returns {React.Node}
   */
  ChildComponents = () => {
    const { alignment, spread, disable_box_shadow, baseZIndex } = this.props

    return React.Children.map(this.props.children, (child, index) => {
      const position = this._getCardClass(index)

      return (
        <div
          key={index}
          // onClick={() => this._cardOnClick(position)}
          style={{
            ...STYLES.CARD,
            opacity: getOpacity(position),
            zIndex: getZIndex(position, baseZIndex),
            transform: getTransform(position, alignment, spread),
            boxShadow: getBoxShadow(position, alignment, disable_box_shadow),
            // cursor: getCursor(position, alignment),
          }}
        >
          {child}
        </div>
      )
    })
  }

  render() {
    return (
      <div style={STYLES.CONTAINER}>
        <this.ChildComponents />
      </div>
    )
  }
}

export default Cards
