<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-card-title class="headline">試算</v-card-title>
        <div class="d-flex">
          <v-text-field
            v-model="amount"
            type="number"
            label="保持ATOM"
            class="mx-5"
          />
          <v-text-field
            v-model="fee"
            label="fee"
            type="number"
            class="mr-5"
            step="0.0001"
          />
          <v-text-field
            v-model="APR"
            label="APR"
            class="mr-5"
            type="number"
            step="0.01"
          />
        </div>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="366"
            :item-class="itemClass"
            hide-default-footer
            mobile-breakpoint="0"
          >
            <template #[`item.rewardByPeriod`]="{ item }">
              {{ atom(item.rewardByPeriod) }}
            </template>

            <template #[`item.totalFee`]="{ item }">
              {{ atom(item.totalFee) }}
            </template>

            <template #[`item.monthRewardAtom`]="{ item }">
              {{ atom(item.monthRewardAtom) }}
            </template>

            <template #[`item.totalFeeYear`]="{ item }">
              {{ atom(item.totalFeeYear) }}
            </template>

            <template #[`item.yearRewardAtom`]="{ item }">
              {{ atom(item.yearRewardAtom) }}
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      fee: 0.0075,
      amount: 1000,
      headers: [
        {
          text: '周期',
          align: 'start',
          sortable: false,
          value: 'period',
        },
        {
          text: '周期毎ATOM',
          align: 'start',
          sortable: false,
          value: 'rewardByPeriod',
        },
        {
          text: '30日でかかる手数料',
          align: 'start',
          sortable: false,
          value: 'totalFee',
        },
        {
          text: '30日で得るATOM',
          align: 'start',
          sortable: false,
          value: 'monthRewardAtom',
        },
        {
          text: '365日でかかる手数料',
          align: 'start',
          sortable: false,
          value: 'totalFeeYear',
        },
        {
          text: '365日で得るATOM',
          align: 'start',
          sortable: false,
          value: 'yearRewardAtom',
        },
      ],
      apy: 10,
    }
  },
  computed: {
    items() {
      const items = [
        {
          period: '無し',
          totalFee: 0,
          rewardByPeriod: 0,
          monthRewardAtom:
            (this.amount * (this.apy / 365 / 24) * (24 * 30)) / 100,
          yearRewardAtom: (this.amount * this.apy) / 100,
        },
      ]

      for (let day = 1; day <= 30; day++) {
        const reinvestCount = 30 / day
        const periodInterestRate =
          ((this.apy / 365 / 24) * (24 * day)) / 100 + 1
        const rewardByPeriod = this.amount * (periodInterestRate - 1)
        const totalFee = this.fee * reinvestCount

        const composedInterestRate = periodInterestRate ** reinvestCount

        const monthRewardAtom =
          this.amount * composedInterestRate - totalFee - this.amount

        const reinvestCountYear = 365 / day
        const composedInterestRateYear = periodInterestRate ** reinvestCountYear
        const totalFeeYear = this.fee * reinvestCountYear

        const yearRewardAtom =
          this.amount * composedInterestRateYear - totalFeeYear - this.amount

        items.push({
          period: day + '日',
          totalFee,
          rewardByPeriod,
          monthRewardAtom: monthRewardAtom < 0 ? 0 : monthRewardAtom,
          totalFeeYear,
          yearRewardAtom: yearRewardAtom < 0 ? 0 : yearRewardAtom,
        })
      }
      return items
    },
    best() {
      return Math.max(...this.items.map((o) => o.yearRewardAtom))
    },
  },
  methods: {
    itemClass(item) {
      return item.yearRewardAtom === this.best ? 'best' : ''
    },
    atom(amount) {
      return parseFloat(amount).toFixed(6)
    },
  },
}
</script>

<style>
.best {
  background-color: rebeccapurple;
}
</style>
