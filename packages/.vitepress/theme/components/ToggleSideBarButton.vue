<template>
  <div
    class="sidebar-button"
    aria-expanded="false"
    role="button"
    tabindex="0"
    @click="$emit('toggle')"
  >
    <div class="icon" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['toggle'])
</script>

<style lang="scss">
.sidebar-button {
  position: absolute;
  top: 0.6rem;
  left: 1rem;
  display: none;
  padding: 0.6rem;
  cursor: pointer;
}

.sidebar-button .icon {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
}

.sidebar-button {
  position: absolute;
  top: 0.6rem;
  left: 1rem;
  display: none;
  padding: 0.6rem;
  cursor: pointer;
}

.sidebar-button .icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  cursor: inherit;

  span {
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: var(--c-text);
    border-radius: 2px;
    transition: transform var(--t-transform);

    &:nth-child(2) {
      margin: 6px 0;
    }
  }
}

.theme {
  &.sidebar-open {
    .nav-bar > .sidebar-button .icon {
      span {
        &:nth-child(1) {
          transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);
        }

        &:nth-child(2) {
          transform: scale3d(0, 1, 1);
        }

        &:nth-child(3) {
          transform: rotate(-45deg) translate3d(6px, -6px, 0);
        }

        &:nth-child(1),
        &:nth-child(3) {
          transform-origin: center;
        }
      }
    }
  }
}

@media screen and (max-width: 719px) {
  .sidebar-button {
    display: block;
  }
}
</style>
