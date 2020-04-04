import { Cookies } from 'components/Cookies'
import { ChatSelector } from 'app/ChatSelector';
import { ChatAppFrameSelector } from 'app/ChatAppFrameSelector'
import { PlayerModeSelector } from 'app/PlayerModeSelector'
import { Selector } from 'components/Selector'
import { Mode } from 'components/Mode';

/**
 * @export
 * @class ChatOverlayerForYouTube
 */
export class ChatOverlayerForYouTube extends Selector {
  /**
   * cookies instance
   *
   * @private
   * @type {Cookies}
   * @memberof ChatOverlayerForYouTube
   */
  private cookies: Cookies

  /**
   * mode instance
   *
   * @private
   * @type {Mode}
   * @memberof ChatOverlayerForYouTube
   */
  private mode: Mode

  /**
   * chat selector instance
   *
   * @private
   * @type {ChatSelector}
   * @memberof ChatOverlayerForYouTube
   */
  private chatSelector: ChatSelector

  /**
   * chat app frame selector instance
   *
   * @private
   * @type {ChatAppFrameSelector}
   * @memberof ChatOverlayerForYouTube
   */
  private chatAppFrameSelector: ChatAppFrameSelector

  /**
   * player mode selector instance
   *
   * @private
   * @type {PlayerModeSelector}
   * @memberof ChatOverlayerForYouTube
   */
  private playerModeSelector: PlayerModeSelector

  /**
   * Creates an instance of ChatOverlayerForYouTube.
   *
   * @memberof ChatOverlayerForYouTube
   */
  public constructor() {
    super('body')

    this.cookies = new Cookies()
    this.mode = new Mode()

    this.chatSelector = new ChatSelector()
    this.chatAppFrameSelector = new ChatAppFrameSelector()
    this.playerModeSelector = new PlayerModeSelector()
    this.playerModeSelector.setOnclick(() => {
      this.toggleMode()
    })

    this.changeMode(this.cookies.isWide)
  }

  /**
   * dispose attached element
   */
  public dispose(): void {
    this.element.classList.toggle(this.mode.class, false)
  }

  /**
   * change chat overlay mode
   *
   * @param {boolean} isOverlayMode
   * @memberof ChatOverlayerForYouTube
   */
  public changeMode(isOverlayMode: boolean): void {
    this.element.classList.toggle(this.mode.class, isOverlayMode)
    this.chatAppFrameSelector.changeMode(this.mode.class, isOverlayMode)
    this.chatSelector.setHeight()
  }

  /**
   * toggle chat overlay mode
   *
   * @memberof ChatOverlayerForYouTube
   */
  public toggleMode(): void {
    this.changeMode(!this.mode.isOverlay)
  }

  /**
   * try new instance
   *
   * @static
   * @returns {(ChatOverlayerForYouTube | null)}
   * @memberof ChatOverlayerForYouTube
   */
  public static tryNew(): ChatOverlayerForYouTube | null {
    try {
      return new ChatOverlayerForYouTube()
    } catch(error) {
      return null
    }
  }
}