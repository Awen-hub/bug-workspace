import { symlink } from 'fs/promises'
import path from 'path'
const originPath = path.resolve('yarn.lock')
const targetPath = path.resolve('packages/firstPage/yarn.lock')
symlink(originPath, targetPath)