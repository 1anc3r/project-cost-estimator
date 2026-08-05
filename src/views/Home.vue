<template>
  <div class="home-container">
    <header class="home-header">
      <h1>
        <el-icon><Histogram /></el-icon>
        信息化项目费用测算工具
      </h1>
      <p class="subtitle">选择适用的标准规范开始测算</p>
    </header>

    <div class="card-grid">
      <el-card class="home-card" shadow="hover" @click="goTo('chengdu')">
        <div class="card-icon chengdu-icon">
          <el-icon><MapLocation /></el-icon>
        </div>
        <h2>成都市信息化项目费用测算</h2>
        <p class="standard">DB5101/T 5—2018</p>
        <p class="desc">基于功能点法（ILF/EIF），支持复用度、软件因素调整、开发因素调整及直接非人力成本。</p>
        <el-button type="primary" size="large">进入测算</el-button>
      </el-card>

      <el-card class="home-card" shadow="hover" @click="goTo('sichuan')">
        <div class="card-icon sichuan-icon">
          <el-icon><MapLocation /></el-icon>
        </div>
        <h2>四川省信息化项目费用测算</h2>
        <p class="standard">TSCSIA 0015-2023</p>
        <p class="desc">涵盖建设费用（成品软件、定制开发、数据建设、集成等）、购买服务费、运维费及其他费用。</p>
        <el-button type="success" size="large">进入测算</el-button>
      </el-card>
    </div>

    <footer class="home-footer">
      <span>by 1anc3r</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Histogram, MapLocation } from '@element-plus/icons-vue'

const router = useRouter()

const goTo = (path: string) => {
  router.push(`/${path}`)
}
</script>

<style scoped lang="scss">
.home-container {
  max-width: 1920px;
}

.home-header {
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #1a3a5c;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    .el-icon {
      font-size: 36px;
      color: #2a5f8f;
    }
  }

  .subtitle {
    font-size: 16px;
    color: #6a7a8a;
    margin-top: 8px;
  }
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
}

@media (max-width: 900px) {
  .card-grid {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin: 0 auto;
  }
}

.home-card {
  padding: 30px 24px 24px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border-radius: 16px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(26, 58, 92, 0.18);
  }

  .card-icon {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 18px;
    font-size: 32px;

    .el-icon {
      font-size: 34px;
    }
  }

  .chengdu-icon {
    background: #e8f0fe;
    color: #1a3a5c;
  }

  .sichuan-icon {
    background: #e6f7ec;
    color: #1a7a4a;
  }

  h2 {
    font-size: 22px;
    font-weight: 600;
    color: #1a3a5c;
    margin-bottom: 16px;
  }

  .standard {
    font-size: 14px;
    color: #8a9aa8;
    background: #f0f2f5;
    display: inline-block;
    padding: 2px 16px;
    border-radius: 12px;
    margin-bottom: 16px;
  }

  .desc {
    font-size: 14px;
    color: #4a5b6e;
    line-height: 1.7;
    margin-bottom: 16px;
    min-height: 48px;
  }

  .el-button {
    min-width: 200px;
    border-radius: 24px;
    font-weight: 500;
  }
}

.home-footer {
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #8a9aa8;
  border-top: 1px solid #eef2f7;
}
</style>