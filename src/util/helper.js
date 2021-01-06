import { ElNotification } from 'element-plus'

export function emitWarningNotification (title, msg) {
  ElNotification.error({
    title: title,
    message: msg
  })
}
