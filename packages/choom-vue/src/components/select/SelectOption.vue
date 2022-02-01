<script>
export default {
  name: "SelectOption",
  render() {
    const p = this.$props;
    const { value, disabled } = p;

    return (
      <option value={value} disabled={disabled}>
        {this.$slots.default()}
      </option>
    );
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
