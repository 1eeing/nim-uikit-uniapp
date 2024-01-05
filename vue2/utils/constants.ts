import { t } from './i18n'

// 自定义的一些事件常量
export const events = {
  // 自己发出一条消息
  SEND_MSG: 'sendMsg',
  // 发送消息失败
  SEND_MSG_FAILED: 'sendMsgFailed',
  // 收到一条消息
  ON_MSG: 'onMsg',
  // 加载更多
  ON_LOAD_MORE: 'onLoadMore',
  // 首次进入聊天页并获取历史记录
  ON_CHAT_MOUNTED: 'onChatMounted',
  // 重新编辑撤回消息
  ON_REEDIT_MSG: 'onReEditMsg',
  // 页面触底
  ON_REACH_BOTTOM: 'onReachBottom',
  // 页面触顶
  ON_REACH_TOP: 'onReactTop',
  // 回复消息
  REPLY_MSG: 'replyMsg',
  // input框聚焦
  ON_INPUT_FOCUS_CHANGE: 'onInputFocusChange',
  // input框失焦
  ON_INPUT_BLUR: 'onInputBlur',
  // 滚动到底部
  ON_SCROLL_BOTTOM: 'onScrollBottom',
  // @群成员
  AIT_TEAM_MEMBER: 'aitTeamMember',
  // 关闭表情框
  CLOSE_EMOJI: 'closeEmoji',
  // 表情框弹起与收起变化
  EMOJI_AREA_CHANGE: 'emojiAreaChange',
  // 获取历史消息
  GET_HISTORY_MSG: 'getHistoryMsg',
  // 取消转发消息
  CANCEL_FORWARD_MSG: 'cancelForwardMsg',
  // 确认转发消息
  CONFIRM_FORWARD_MSG: 'confirmForwardMsg',
  // @消息  @群成员
  HANDLE_AIT_MEMBER: 'handleAitMember',
  // 关闭@弹窗
  CLOSE_AIT_POPUP: 'closeAitPopup',
  // 表情点击
  EMOJI_CLICK: 'emojiClick',
  // 表情删除
  EMOJI_DELETE: 'emojiDelete',
  // 表情发送
  EMOJI_SEND: 'emojiSend',
  // 好友选择
  FRIEND_SELECT: 'friendSelect',
  // 处理滚动穿透
  HANDLE_MOVE_THROUGH: 'handleMoveThrough',
}

export const HISTORY_LIMIT = 15

export const MSG_ID_FLAG = 'message-item-'

export const AT_ALL_ACCOUNT = 'ait_all'

export const REPLY_MSG_TYPE_MAP = {
  image: t('imgMsgText'),
  audio: t('audioMsgText'),
  video: t('videoMsgText'),
  file: t('fileMsgText'),
}

export const STORAGE_KEY = '__yx_im_options__'

export const H5_HAS_LOGIN_KEY = 'h5_has_login'
